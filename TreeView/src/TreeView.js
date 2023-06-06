import { useState } from "react";
import { FcFile, FcFolder } from "react-icons/fc";

const TreeView = ({ data, isChild = false }) => {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <div style={{ marginLeft: isChild ? 20 : "" }} className="tree-view">
        <div onClick={() => setExpand(!expand)}>
          {data.children && data.children.length > 0 ? (
            <FcFolder />
          ) : (
            <FcFile />
          )}
          {data.name}
        </div>
        <br />
        {data.children &&
          data.children.length > 0 &&
          data.children.map((row) => {
            return (
              <div style={{ display: expand ? "block" : "none" }}>
                <TreeView
                  style={{ paddingLeft: 15 }}
                  data={row}
                  isChild={true}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default TreeView;
