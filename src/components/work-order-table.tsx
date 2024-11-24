import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { workOrders } from "@/mocks"; // Cambiamos `usersMock` a `ordersMock`
import { Button } from "./ui";
import { FileCheck, Pencil, Trash2 } from "lucide-react";

export function OrdersTable({ handleEdit }: { handleEdit: () => void }) {
  const handleEditOrder = (orderId: number) => {
    console.log("Editar orden:", orderId);
    handleEdit();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Número de orden</TableHead>
          <TableHead>Ciudad</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Dirección</TableHead>
          <TableHead>Código interno</TableHead>
          <TableHead>Marca</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.orderNumber}</TableCell>
            <TableCell>{order.city}</TableCell>
            <TableCell>{order.client}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.internalCode}</TableCell>
            <TableCell>{order.brand}</TableCell>
            <TableCell className="flex gap-2 justify-center">
              <Button size={"icon"} variant={"secondary"}>
                <FileCheck />
              </Button>
              <Button
                size={"icon"}
                variant={"secondary"}
                onClick={() => handleEditOrder(order.id)}
              >
                <Pencil />
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
