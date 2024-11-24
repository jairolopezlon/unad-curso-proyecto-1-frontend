import { Button } from "@/components";
import { Checkbox } from "@/components/ui/checkbox";
import { permissionsMock, rolePermissionsMock, rolesMock } from "@/mocks";

export const RolesPage = () => {
  return (
    <div>
      <div className="mb-2">
        <span className="font-semibold">Roles y Permisos</span>
        <div className="mt-2 border border-slate-300 p-4 rounded-sm">
          <div className="flex flex-wrap gap-4">
            {rolesMock.map((rolItem) => {
              const rolsXPermission = rolePermissionsMock.find(
                (item) => item.roleId === rolItem.id
              );
              return (
                <div key={rolItem.id} className="flex flex-col gap-2 basis-64">
                  <span className="font-semibold">{rolItem.name}</span>
                  <div className="flex flex-col gap-2">
                    {permissionsMock.map((permissionItem) => (
                      <div
                        key={permissionItem.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={permissionItem.id.toString()}
                          defaultChecked={rolsXPermission?.permissions.includes(
                            permissionItem.id
                          )}
                        />
                        <label
                          htmlFor={permissionItem.id.toString()}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {permissionItem.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-4">
            <Button size={"sm"}>Guardar Cambios</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
