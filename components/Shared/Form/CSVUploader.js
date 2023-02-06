import React, { Fragment, useState, useEffect } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import UseToggle from "@hooks/UseToogle";
import SmallLoader from "../SmallComponents/SmallLoader";
import { convertCSVFileToJSON, parseImagesB64 } from "@utils/index";

const ImageUploader = ({
	small,
	multiple = true,
	type = "image",
	count,
	onChange,
	onDelete,
	images,
	body,
	disabled,
	children,
	imageUrls,
	maxSize = 7 * 1024 * 1024,
}) => {
	const { isOpen: loading, open: setLoading, close: stopLoading } = UseToggle(true);
	const [files, setFiles] = useState([]);
	const [error, setError] = useState("");
	// const [pFiles, setPFiles] = useState (null);
	const handleDrop = (files) => {
		setFiles(files);
		setError("");
		setLoading();
	};

	const handleSingleFile = (file) => {
		if (typeof file === "object") return file.dataURI;
		return file;
	};
	const [{ canDrop, isOver }, ref] = useDrop(() => ({
		accept: NativeTypes.FILE,
		drop(item) {
			if (!disabled) handleDrop(item.files);
		},
		collect: (monitor) => ({
			canDrop: !!monitor.canDrop(),
			isOver: !!monitor.isOver(),
		}),
	}));

	const getfiles = async () => {
		if (!files.length) return stopLoading();
		const res = await process(files, type, count, maxSize);
		stopLoading();
		console.log({ res });
		if (!res.success) return setError(res.message);

		onChange(res.data);
	};

	useEffect(() => {
		getfiles();
	}, [files, type]);
	const computedClass = (params) => {
		if (canDrop || isOver)
			return {
				borderColor: " hsl(209, 100%, 40%)",
				background: "hsla(209, 100%, 40%,.06)",
			};
		return {};
	};
	const styles = computedClass();
	return (
		<Fragment>
			<label
				className={`br bord-g-2 center-flex fllback small p-3 `}
				style={{
					borderStyle: "dashed",
					cursor: "pointer",
					marginBottom: "8px",
					borderWidth: "7px",
					pointerEvents: loading ? "none" : "auto",
					...styles,
				}}
				ref={ref}
			>
				<input
					onChange={(e) => {
						handleDrop(e.target.files);
					}}
					type='file'
					multiple={multiple}
					name='filles'
					id='filles'
					accept=''
				/>
				<div className='grid_txt_2 u-center' htmlFor='files'>
					{body ? (
						React.cloneElement(body, {
							isOver,
							canDrop,
						})
					) : (
						<Fragment>
							<div className='u-center'>
								<img src='/photos/csv.png' height={120} />
							</div>
							{canDrop && !loading ? (
								<p className='heading_small col-bl cap'>drop files here</p>
							) : (
								<p className='heading_small_1 col-bl cap'>
									{count > 1 ? "drag and drop CSVs here" : "drag and drop a CSV file here"}{" "}
								</p>
							)}

							{loading && (
								<div className='heading_tiny col-gra-d weit-2 cap flexi'>
									<span> processing files...</span>

									<SmallLoader scale={0.4} />
								</div>
							)}

							{!loading && (
								<p className='col-gra-l grid_txt'>
									<span>
										{" "}
										import csv files
										<span className='upp col-pri weit-2 ml-m'>
											{" "}
											7mb maximum per file{" "}
										</span>{" "}
									</span>
								</p>
							)}
						</Fragment>
					)}
				</div>
			</label>
			<small className='small weit-2 col-r'>{error}</small>

			{children}
		</Fragment>
	);
};

async function process(files, type, count, size) {
	const map = {
		image: /png|jpe?g|jfif/i,
		xls: /xlsx|xls|xlsm/i,
	};

	switch (type) {
		case "image": {
			try {
				if (typeof files[0] === "string") return;

				let images = await parseImagesB64(files, map["image"], count, size);
				const fileArr = images.map((e) => ({
					shouldCompress: true,
					dataURI: e,
				}));

				return {
					success: true,
					data: fileArr,
				};
			} catch (error) {
				// console.log ({error});
				return {
					success: false,
					files: null,
					message: error.message,
				};
			}
		}
		case "csv": {
			try {
				if (typeof files[0] === "string") return;

				let data = await convertCSVFileToJSON(files[0]);

				return {
					success: true,
					data: data,
				};
			} catch (error) {
				// console.log ({error});
				return {
					success: false,
					files: null,
					message: error.message,
				};
			}
		}

		default:
			return {
				success: false,
				message: " oopsie invalid file expected a " + type + "file",
			};
	}
}

export default ImageUploader;
