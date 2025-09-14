import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

CRUD.updateRow(newRowID, UpdatedRow);

const newRowID: RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { ...row, age: 23 };

CRUD.deleteRow(newRowID);
