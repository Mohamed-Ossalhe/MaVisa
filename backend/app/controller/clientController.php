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
        // get single client data using token
        public function getSingleClientUsingToken() {
            if(checkMethod("POST")) {
                $clientToken = json_decode(file_get_contents("php://input"));
                $data = array(
                    "token" => $clientToken->token
                );
                $this->model("Client");
                if($this->model->getSingleDataUsingtoken($data)) {
                    $clientInfo = $this->model->getSingleDataUsingtoken($data);
                    echo json_encode(array("client" => $clientInfo, "status" => "success"));
                }else {
                    echo json_encode(array("message" => "Invalid Token", "status" => "error"));
                }
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
                    "doc-num" => validateData($clientData->doc_num),
                    "rdv-date" => validateData($clientData->rdv_date),
                    "rdv-time" => validateData($clientData->rdv_time),
                    "rdv-status" => validateData("pending")
                );
                // var_dump($data);
                $this->model("Client");
                if(!$this->checkClient($data)) {
                    $this->model("RDV");
                    if(!$this->model->checkRDV($data)) {
                        $this->model("Client");
                        if($this->model->insertData($data)) {
                            $userId = $this->model->getHighestId();
                            $data += ["user-id" => validateData($userId["id"])];
                            $this->model("RDV");
                            if($this->model->insertData($data)) {
                                echo json_encode(array("message" => "Client Registred Successfully!", "status" => "success", "token" => $data["token"]));
                            }
                        }else {
                            echo json_encode(array("message" => "Sorry Something Went Wrong!", "status" => "error"));
                        }
                    }else {
                        echo json_encode(array("message" => "RDV date and time already taken!", "status" => "warn"));
                    }
                }else {
                    echo json_encode(array("message" => "Client Already Exists", "status" => "warn"));
                }
            }
        }
        // update single client data
        public function updateClient() {
            if(checkMethod("PUT")) {
                $clientData = json_decode(file_get_contents("php://input"));
                $data = array(
                    "id" => validateData($clientData->id),
                    "full-name" => validateData($clientData->firstName .' '. $clientData->lastName),
                    "birth-date" => validateData($clientData->birthDate),
                    "nationality" => validateData($clientData->nationality),
                    "situation" => validateData($clientData->family_situation),
                    "address" => validateData($clientData->address),
                    "visa-type" => validateData($clientData->visa_type),
                    "depart-date" => validateData($clientData->depart_date),
                    "arrive-date" => validateData($clientData->arrival_date),
                    "doc-type" => validateData($clientData->doc_type),
                    "doc-num" => validateData($clientData->doc_num),
                    "rdv-date" => validateData($clientData->rdv_date),
                    "rdv-time" => validateData($clientData->rdv_time)
                );
                $this->model("Client");
                if($this->model->updateData($data)) {
                    echo json_encode(array("message" => "Client Updated Successfully!", "status" => "success"));
                }else {
                    echo json_encode(array("message" => "Sorry Something Went Wrong!", "status" => "error"));
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
                    echo json_encode(array("message" => "Client Deleted Successfully!", "status" => true));
                }else {
                    echo json_encode(array("message" => "Sorry Something Went Wrong!", "status" => false));
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