export default function Switch(value: string) {
  let result: string;
  switch (value) {
    case 'elephant':
      result = value + 1;
      break;
    default:
      result = value;
      break;
  }

  return result;
}
