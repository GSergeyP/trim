function Component(props: Record<string, any>) {
  const { clases, style } = props;

  return (
    <svg
      className={clases}
      style={style}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L7 7L13 1" />
    </svg>
  );
}

export { Component };
