import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usersMock } from "@/mocks";
import { Button } from "./ui";
import { Trash2, UserRoundPen } from "lucide-react";

export function UsersTable({
  handleEdit,
}: {
  handleEdit: (userId: number) => void;
}) {
  const handleEditUser = (userId: number) => {
    console.log("Editar usuario:", userId);
    handleEdit(userId);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nombre de usuario</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Fecha de creación</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersMock.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.roleId}</TableCell>
            <TableCell className="text-right">
              {new Date(user.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="flex justify-center gap-2">
              <Button
                size={"icon"}
                variant={"secondary"}
                onClick={() => handleEditUser(user.id)}
              >
                <UserRoundPen />
              </Button>
              <Button size={"icon"} variant={"destructive"}>
                <Trash2 />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
