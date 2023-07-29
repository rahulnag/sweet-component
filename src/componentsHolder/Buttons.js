import "./button.css";
import GlowingButton from "../buttonComponents/GlowingButton";
import FlickerButton from "../buttonComponents/FlickerButton";
import SwitchButton from "../buttonComponents/SwitchButton";
const Buttons = () => {
  return (
    <div className="buttonHolder">
      <GlowingButton />
      <FlickerButton />
      <SwitchButton />
    </div>
  );
};

export default Buttons;
