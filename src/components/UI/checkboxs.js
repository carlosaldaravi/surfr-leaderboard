import InputCheckbox from "./input-checkbox";

const Checkboxs = ({ section }) => {
  return (
    <>
      {section.options.map((option, optionIdx) => (
        <InputCheckbox
          key={`input-checkbox-${optionIdx}`}
          section={section}
          option={option}
          optionIdx={optionIdx}
        />
      ))}
    </>
  );
};
export default Checkboxs;
