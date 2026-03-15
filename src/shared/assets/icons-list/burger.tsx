function Component(props: Record<string, any>) {
  const { clases, style } = props;

  return (
    <svg
      className={clases}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="4" width="22" height="3" rx="0.7" />
      <rect x="1" y="16" width="13" height="3" rx="0.7" />
      <rect x="1" y="10" width="22" height="3" rx="0.7" />
    </svg>
  );
}

export { Component };
