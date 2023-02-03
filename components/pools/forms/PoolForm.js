import Field from "@form-components/Field";
import Select2 from "@form-components/Select2";
import CSVUpoloader from "@form-components/CSVUploader";
import OnAndOffBtn from "@shared/SmallComponents/OnAndOffBtn";
import Card from "@sharedUi/Card";
import AssignmentBoard from "@components/Project/AssignmentBoard";
import CtaButton from "@sharedUi/CtaButton";
function PoolForm() {
	return (
		<div className='container'>
			<Card>
				<div className='form_pkg p-5'>
					<div className='form_grid_2'>
						<Field label={"year"} type='year' />
						<Field label={"creator"} type='string' />
					</div>
					<Select2
						label={"supervisors"}
						placeholder='select supervisors'
						options={[
							{
								label: "masters",
								value: "blah",
							},
						]}
					/>

					<Select2
						// isLoading
						label={"students type"}
						placeholder={"e.g undergraduate masters or PHD"}
						options={[
							{
								label: "masters",
								value: "blah",
							},
						]}
					/>
					<Field typeOfField={"textarea"} label={"description"} />
					<div className='mt-2'>
						<CSVUpoloader />
					</div>
					<AssignmentBoard />
					<div className='flexi gap-25 mt-4'>
						<OnAndOffBtn name={"lock"} />
						<label htmlFor='lock' className='heading_md col-gra-l'>
							{" "}
							lock this pool to prevent updates by another admin{" "}
						</label>
					</div>
					<div className='u-center p-3 center-flex'>
						<CtaButton classes='btn_wide_1' loading disabled>
							create pool
						</CtaButton>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default PoolForm;
