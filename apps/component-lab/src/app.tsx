import { Button, FullHeightLayout, CopyRight } from "@andersco/components";

export function App() {
  return (
    <FullHeightLayout footerContent={<div>Footer</div>}>
      {/* <Mask showMask /> */}
      APP
      <div>
        <Button>sdsdf</Button>
      </div>
      <div>
        Copyright: <br />
        <CopyRight orgName="Big Corp, Inc." />
      </div>
    </FullHeightLayout>
  );
}
