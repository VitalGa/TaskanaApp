export default function PriorityLowIcon({ color = '#6C6C6C', ...props }) {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.75 20C26.75 20.4142 26.4142 20.75 26 20.75L14 20.75C13.5858 20.75 13.25 20.4142 13.25 20C13.25 19.5858 13.5858 19.25 14 19.25L26 19.25C26.4142 19.25 26.75 19.5858 26.75 20Z'
        fill={color}
      />
    </svg>
  );
}
