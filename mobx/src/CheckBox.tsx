import { Observer, observer } from "mobx-react";
import {Checkbox} from "antd"

import store from "./store/checkBoxStore";

const CheckBox = () => (
    <Checkbox checked={store.checked} onChange={() => store.checkedChange()} />
);

export default observer(CheckBox)

