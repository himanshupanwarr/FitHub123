import Button from "./Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="mt-[20px] pt-[10px] text-[25px] ml-[20rem] mb-[10px] pb-[10px]">Recommended</h2>
        <div className="flex ml-[20rem]">
          {/* <Button onClickHandler={handleClick} value="" title="All" /> */}
          <Button onClickHandler={handleClick} value="Cult" title="Cult" />
          <Button onClickHandler={handleClick} value="Pacific" title="Pacific" />
          <Button onClickHandler={handleClick} value="One8" title="One8" />
          <Button onClickHandler={handleClick} value="Anytime" title="AnyTime" />
          <Button onClickHandler={handleClick} value="MenClub" title="MenClub" />
        </div>
      </div>
    </>
  );
};

export default Recommended;