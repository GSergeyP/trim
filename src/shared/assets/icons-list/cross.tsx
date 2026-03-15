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
      <path d="M17.2502 4L11.9994 9.24954L6.74984 4L5 5.74985L10.2495 10.9994L5 16.2489L6.74984 17.9988L11.9994 12.7492L17.2502 17.9988L19 16.2489L13.7505 10.9994L19 5.74985L17.2502 4Z" />
    </svg>
  );
}

export { Component };
