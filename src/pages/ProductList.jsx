import React, { useEffect, useState } from "react";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productServices";
import { Container, Input } from "semantic-ui-react";

export default function ProductList() {
  // const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToTable = () => {
    // Eğer input boş değilse tabloya ekle
    if (inputValue.trim() !== "") {
      setTableData([...tableData, inputValue]);
      // Input değerini sıfırla
      setInputValue("");
    }
  };
  //Tablodaki bütün verileri siler 
  const deleteAllTable = () => {
    setTableData([]);
  };

  const handleKeyPress = (e) => {
    // Eğer Enter tuşuna basıldıysa ve eğer bu olay input elemanında gerçekleşiyorsa
    if (e.key === "Enter" && e.target.tagName.toLowerCase() === "input") {
      addToTable();
    }
  };

  /*useEffect(()=>{
    let productsService = new ProductService()
    productsService.getProducts.then(result=>setProducts(result.data.data)) 
  })
  */
  return (
    <div>
      <Container className="input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={addToTable}>Ekle</Button>
        <Button onClick={deleteAllTable}>Sil</Button>
      </Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Tablo Değerleri</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableData.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell>{data}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
