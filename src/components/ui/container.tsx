import React from "react";

type ContainerProps = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
}>;

export default function Container({ children, className = "", style }: ContainerProps) {
  return (
    <div className={`__gw-container ${className}`} style={style}>
      {children}
      <style jsx>{`
        .__gw-container {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
          box-sizing: border-box;
        }

        @media (min-width: 640px) {
          .__gw-container {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (min-width: 1024px) {
          .__gw-container {
            padding-left: 32px;
            padding-right: 32px;
          }
        }
      `}</style>
    </div>
  );
}
