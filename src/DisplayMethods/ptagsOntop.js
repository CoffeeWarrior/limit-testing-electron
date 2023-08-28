export const ptagsOntopOfEachother = (len) => {
  const res = [
    <div>
      This method is not as effective at displaying because you are trying to
      render lots of elements to the screen. While it is still do-able at higher
      values it is definitely slower than letting some elements be off-screen.
    </div>,
  ];
  for (let i = 0; i < len; i++) {
    res.push(
      <p
        style={{ position: "absolute", top: `${i + 30}px` }}
      >{`drawing element ${i}`}</p>
    );
  }
  return <div style={{ position: "relative" }}>{res}</div>;
};
