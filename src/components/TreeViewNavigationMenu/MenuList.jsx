import MenuItem from "./MenuItem";

export default function MenuList({list}) {
  return (
    <>
      <ul className="menuList-container">
        {list?.length &&
          list.map((listItem) => (
              <MenuItem item={listItem} />
          ))}
      </ul>
    </>
  );
}
