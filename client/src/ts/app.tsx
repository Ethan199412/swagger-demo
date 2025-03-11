import * as React from "react";
import "./app.less";
import { mult, pow } from "../utils";
import axios from "axios";

axios.defaults.withCredentials = true;

// 需要放 index.d.ts 文件到根目录并在 tsconfig
// includes 里引入才能解决 vscode 报错
import img from "../assets/react.jpg";
import { helloWorldApi } from "../api/index";

class TestDiff extends React.Component<any, any> {
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      list: [3, 1, 5, 2, 4],
    };
  }

  componentDidMount(): void {
    helloWorldApi({ email: "123", username: "123" }).then((res) => {
      console.log("[p1.0] res", res);
    });
  }

  // 问题的原因在于 oldChildrenMap 里面的 rootId 重复了
  render() {
    const { list } = this.state;
    return <div>test</div>;
  }
}

export default TestDiff;
