export type DeferredMessage = {
  id: number;
  message: string;
};
const count = 30000;
export const deferredData: DeferredMessage[] = new Array(count);
for (let i = 0; i < count; i++) {
  deferredData[i] = { id: i + 1, message: "My id is " + i + 1 };
}
