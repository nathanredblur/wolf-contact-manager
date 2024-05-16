import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function ContactSideBar() {
  return (
    <Card className="h-full py-3">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        Groups
      </CardHeader>
      <CardBody className="overflow-visible py-2">Groups goes here</CardBody>
      <CardFooter className="flex justify-center">
        <Button color="primary" radius="full">
          Add Contact
        </Button>
      </CardFooter>
    </Card>
  );
}
