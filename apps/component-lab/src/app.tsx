import { Button, FullHeightLayout, CopyRight, Row } from "@andersco/components";

export function App() {
  return (
    <FullHeightLayout footerContent={<div>Footer</div>}>
      APP
      <div>
        <Button>sdsdf</Button>
      </div>
      <div>
        Copyright: <br />
        <CopyRight>Big Corp, Inc.</CopyRight>
      </div>
      <div>
        Row of items:
        <Row>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Row>
      </div>
    </FullHeightLayout>
  );
}
