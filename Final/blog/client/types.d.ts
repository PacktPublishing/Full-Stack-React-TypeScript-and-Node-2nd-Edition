declare global {
  namespace JSX {
    interface IntrinsicElements {
      dialog: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDialogElement>,
        HTMLDialogElement
      >;
    }
  }
}
