import { CreateUserForm, UsersTable, EditUserForm } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const UsersPage = () => {
  const [optionSelected, setOptionSelected] = useState("listado");
  const handleEdit = (userId: number) => {
    console.log({ userId });
    setOptionSelected("actualizar");
  };

  return (
    <div>
      <div className="mb-2">
        <span className="font-semibold">Usuarios</span>
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
            <UsersTable handleEdit={handleEdit} />
          </TabsContent>
          <TabsContent className="mt-0" value="crear">
            <CreateUserForm />
          </TabsContent>
          <TabsContent className="mt-0" value="actualizar">
            <EditUserForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
