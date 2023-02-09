<?php
    class clientController extends Controller {
        // get all clients data
        public function getAllClients() {
            if(checkMethod("GET")) {
                $this->model("Client");
                $clients = $this->model->getAllData();
                echo json_encode($clients);
            }
        }
        // get single client data
        public function getSingleClient($id) {
            if(checkMethod("GET")) {
                $data = array(
                    "client-id" => $id
                );
                $this->model("Client");
                $client = $this->model->getSingleData($data);
                echo json_encode($client);
            }
        }
        // add new client data
        public function registerClient() {
            if(checkMethod("POST")) {
                $clientData = json_decode(file_get_contents("php://input"));
                $data = array(
                    "token" => uniqid(),
                    "full-name" => validateData($clientData->firstName .' '. $clientData->lastName),
                    "birth-date" => validateData($clientData->birthDate),
                    "nationality" => validateData($clientData->nationality),
                    "situation" => validateData($clientData->family_situation),
                    "address" => validateData($clientData->address),
                    "visa-type" => validateData($clientData->visa_type),
                    "depart-date" => validateData($clientData->depart_date),
                    "arrive-date" => validateData($clientData->arrival_date),
                    "doc-type" => validateData($clientData->doc_type),
                    "doc-num" => validateData($clientData->doc_num)
                );
                $this->model("Client");
                if(!$this->checkClient($data)) {
                    if($this->model->insertData($data)) {
                        echo json_encode(array("message" => "Client Registred Successfully!", "status" => "success"));
                    }else {
                        echo json_encode(array("message" => "Sorry Something Went Wrong!", "status" => "error"));
                    }
                }else {
                    echo json_encode(array("message" => "Client Already Exists", "status" => "warn"));
                }
            }
        }
        // update single client data
        public function updateClient($id) {
            if(checkMethod("PUT")) {
                $clientData = json_decode(file_get_contents("php://input"));
                $data = array(
                    "id" => validateData($id),
                    "token" => validateData($clientData->token),
                    "full-name" => validateData($clientData->full_name),
                    "birth-date" => validateData($clientData->birth_date),
                    "nationality" => validateData($clientData->nationality),
                    "situation" => validateData($clientData->situation),
                    "address" => validateData($clientData->address),
                    "visa-type" => validateData($clientData->visa_type),
                    "depart-date" => validateData($clientData->depart_date),
                    "arrive-date" => validateData($clientData->arrive_date),
                    "doc-type" => validateData($clientData->doc_type),
                    "doc-num" => validateData($clientData->doc_num),
                    "reserve-date" => validateData($clientData->reserve_date)
                );
                $this->model("Client");
                if($this->model->updateData($data)) {
                    echo json_encode(array("message" => "Client Updated Successfully!"));
                }else {
                    echo json_encode(array("message" => "Sorry Something Went Wrong!"));
                }
            }
        }
        // delete single client data
        public function deleteClient($id) {
            if(checkMethod("DELETE")) {
                $data = array(
                    "id" => validateData($id)
                );
                $this->model("Client");
                if($this->model->deleteData($data)) {
                    echo json_encode(array("message" => "Client Deleted Successfully!"));
                }else {
                    echo json_encode(array("message" => "Sorry Something Went Wrong!"));
                }
            }
        }
        // check if client already exist
        public function checkClient($data) {
            if($this->model->checkData($data)) {
                return true;
            }else {
                return false;
            }
        }
    }
?>