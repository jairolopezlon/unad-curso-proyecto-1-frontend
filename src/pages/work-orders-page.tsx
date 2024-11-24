import {
  CreateWorkOrdersForm,
  EditWorkOrdersForm,
  OrdersTable,
} from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const WorkOrdersPage = () => {
  const [optionSelected, setOptionSelected] = useState("listado");
  const handleEdit = () => {
    setOptionSelected("actualizar");
  };

  return (
    <div>
      <div className="mb-2">
        <span className="font-semibold">Ordenes de trabajo</span>
      </div>
      <Tabs
        defaultValue={optionSelected}
        value={optionSelected}
        className="w-full"
      >
        <TabsList>
          <TabsTrigger
            onClick={() => {
              setOptionSelected("listado");
            }}
            value="listado"
          >
            Listado
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setOptionSelected("crear");
            }}
            value="crear"
          >
            Crear
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setOptionSelected("actualizar");
            }}
            value="actualizar"
          >
            Actualizar
          </TabsTrigger>
        </TabsList>
        <div className="mt-2 border border-slate-300 p-4 rounded-sm">
          <TabsContent className="mt-0" value="listado">
            <OrdersTable handleEdit={handleEdit} />
          </TabsContent>
          <TabsContent className="mt-0" value="crear">
            <CreateWorkOrdersForm />
          </TabsContent>
          <TabsContent className="mt-0" value="actualizar">
            <EditWorkOrdersForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
