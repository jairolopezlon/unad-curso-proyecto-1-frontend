import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui";

// Define schema
const orderSchema = z.object({
  orderNumber: z
    .string()
    .min(1, { message: "El número de orden es obligatorio." }),
  city: z.string().min(1, { message: "La ciudad es obligatoria." }),
  client: z.string().min(1, { message: "El cliente es obligatorio." }),
  address: z.string().min(1, { message: "La dirección es obligatoria." }),
  internalCode: z
    .string()
    .min(1, { message: "El código interno es obligatorio." }),
  brand: z.string(),
  model: z.string(),
  magnitude: z.string(),
  series: z.string(),
  class: z.string(),
  resolution: z.string(),
  measurementScope: z.string(),
  requestType: z
    .string()
    .min(1, { message: "El tipo de solicitud es obligatorio." }),
  requester: z
    .string()
    .min(1, { message: "La persona que solicita es obligatoria." }),
  requestDate: z
    .string()
    .min(1, { message: "La fecha de solicitud es obligatoria." }),
  requestMethod: z.string(),
  receptionNumber: z.string(),
  receptionDate: z.string(),
});

interface OrderFormData {
  orderNumber: string;
  city: string;
  client: string;
  address: string;
  internalCode: string;
  brand: string;
  model: string;
  magnitude: string;
  series: string;
  class: string;
  resolution: string;
  measurementScope: string;
  requestType: string;
  requester: string;
  requestDate: string;
  requestMethod: string;
  receptionNumber: string;
  receptionDate: string;
}

export function EditWorkOrdersForm() {
  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="flex gap-2 flex-wrap">
          <FormField
            control={form.control}
            name="orderNumber"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Número de orden</FormLabel>
                <FormControl>
                  <Input placeholder="O25AJMYI" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input placeholder="Abejorral" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Cliente</FormLabel>
                <FormControl>
                  <Input placeholder="Dña Carmen Aponte" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Calle 5 13-28" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="internalCode"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Código interno</FormLabel>
                <FormControl>
                  <Input placeholder="234345" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input placeholder="test marca" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input placeholder="test modelo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="magnitude"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Magnitud</FormLabel>
                <FormControl>
                  <Input placeholder="Ejemplo magnitud" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="series"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Serie</FormLabel>
                <FormControl>
                  <Input placeholder="Número de serie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Clase</FormLabel>
                <FormControl>
                  <Input placeholder="Clase del equipo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resolution"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Resolución</FormLabel>
                <FormControl>
                  <Input placeholder="Resolución" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="measurementScope"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Alcance de medición</FormLabel>
                <FormControl>
                  <Input placeholder="Ejemplo alcance" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <FormField
            control={form.control}
            name="requestType"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Tipo de solicitud</FormLabel>
                <FormControl>
                  <Input placeholder="Calibración / Inspección" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requester"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Persona que solicita</FormLabel>
                <FormControl>
                  <Input placeholder="Guillermo Díaz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requestDate"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Fecha de solicitud</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <FormField
            control={form.control}
            name="requestMethod"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Método de solicitud</FormLabel>
                <FormControl>
                  <Input placeholder="Presencial / Virtual" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="receptionNumber"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Número de recepción</FormLabel>
                <FormControl>
                  <Input placeholder="Rec-00123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="receptionDate"
            render={({ field }) => (
              <FormItem className="!mt-3 grow basis-[200px]">
                <FormLabel>Fecha de recepción</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Add similar structure for remaining fields */}
        <div className="flex justify-end">
          <Button>Actualizar orden</Button>
        </div>
      </form>
    </Form>
  );
}
