import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function LeaderBoardTable() {
  const leaderBoardArray = [
    {
      title: "Aditya Dafe",
      id: 1,
    },
    {
      title: "Kamesh Goundhare",
      id: 2,
    },
    {
      title: "Atharva Nighot",
      id: 3,
    },
  ];

  return (
    <div className="flex justify-center items-center p-[10rem] ml-[11rem] rounded-md">
      <Table className="w-full md:max-w-[50%] text-white overflow-x-auto border-collapse border border-white rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="justify-start border border-white">
              ID
            </TableHead>
            <TableHead className="justify-center border border-white">
              Student
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderBoardArray.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium border border-white">
                {item.id}
              </TableCell>
              <TableCell className="justify-center border border-white">
                {item.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
