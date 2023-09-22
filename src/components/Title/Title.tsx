import "./Title.scss";

export interface TitleProps {
  titleServices: string;
  subtitleServices?: string;
  renderSubtitle: boolean;
}

/**
 * Render the title component.
 * @param {TitleProps} props - The props for the title component.
 * @returns {JSX.Element} - The rendered title component.
 */
const Title = ({
  titleServices,
  subtitleServices,
  renderSubtitle,
}: TitleProps): JSX.Element => {
  return (
    <>
      <h1 className="title-text-align">{titleServices}</h1>
      <div className="hr-line-width" />
      {renderSubtitle ? (
        <div className="cards-description-padding">
          <p>{subtitleServices}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Title;
