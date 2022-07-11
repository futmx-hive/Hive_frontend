import React from 'react';
import Card from '../Shared/SmallComponents/Card';

const FallBackScreen = ({
  children,
  isOpen,
  big = false,
  classes,
  hClass,
  header,
  body,
  footer,
  topContent,
}) => {
  return isOpen
    ? <React.Fragment>

        {children}
      </React.Fragment>
    : <Card
        classes={`fallback pos-r u-center bord-g-1 ${hClass} ${big ? 'big' : 'small'} `}
      >
        {topContent &&
          <div className="top_content u-left">
            {topContent}
          </div>}
        <div className=" fallback_main mt-3">
          {header &&
            <div className="fallback_head">
              {header}
            </div>}

          {body &&
            <div className={`fallback_body `}>
              {body}
            </div>}

          {footer &&
            <div className={`fallback_controls  u-center mt-3 ${classes}`}>
              {footer}
            </div>}

        </div>

      </Card>;
};

export default FallBackScreen;
