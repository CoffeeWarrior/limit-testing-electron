export const ptags = (len) => {
  const res = [
    <div>
      this method is effective at displaying because react is only handling
      drawing what is visible to the user.
    </div>,
  ];
  for (let i = 0; i < len; i++) {
    res.push(<p>{`drawing element ${i}`}</p>);
  }
  return res;
};
