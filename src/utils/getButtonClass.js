export default function getButtonClasses(formStatus, loading) {
  let classes = "";

  if (formStatus === "success") {
    classes += "text-success ";
  } else if (loading) {
    classes += "";
  } else if (formStatus === "error") {
    classes += "text-red";
  } else {
    classes +=
      "hover:text-hoverText focus:text-hoverText transition duration-300 ";
  }

  if (loading || formStatus === "error") {
    classes += " cursor-not-allowed ";
  } else {
    classes += "cursor-pointer ";
  }

  classes +=
    "text-[24px] font-normal line-height-[29px] hover:font-medium focus:font-medium transition duration-300 ";
  classes +=
    "flex gap-[8px] justify-center items-center text-center w-[212px] py-[8px] h-[45px]";

  return classes;
}
