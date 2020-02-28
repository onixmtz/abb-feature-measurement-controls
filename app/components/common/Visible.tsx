type Props = {
  children: JSX.Element;
  when: boolean;
  FallbackComponent?: JSX.Element;
};

export default function Visible(props: Props) {
  return props.when ? props.children : props.FallbackComponent || null;
}