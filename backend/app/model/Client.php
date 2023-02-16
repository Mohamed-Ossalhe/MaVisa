<?php
    class Client extends DB {
        // table name
        private $table = "client";
        // get all data
        public function getAllData() {
            try {
                $qeury = "SELECT * FROM " . $this->table;
                $stmt = $this->connect()->prepare($qeury);
                if($stmt->execute()) {
                    return $stmt->fetchAll();
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // get one row of data
        public function getSingleData($data) {
            try {
                $query = "SELECT * FROM " . $this->table . " WHERE id = :id";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam("id", $data["client-id"]);
                if($stmt->execute()) {
                    return $stmt->fetch();
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // get single data using token
        public function getSingleDataUsingtoken($data) {
            try {
                $query = "SELECT * FROM " . $this->table . " JOIN `rdv` on ". $this->table .".`id` = `rdv`.`user_id` WHERE ". $this->table .".`token` = :token";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam("token", $data["token"]);
                if($stmt->execute()) {
                    return $stmt->fetch();
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // insert single data into database
        public function insertData($data) {
            try {
                $query = "INSERT INTO " . $this->table . " (token, nom_complet, naissance, nationalite, situation, address, type_visa, date_depart, date_arriver, type, numero_document)VALUES(:token, :nom_complet, :naissance, :nationalite, :situation, :address, :type_visa, :date_depart, :date_arriver, :type, :numero_document)";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam('token', $data["token"]);
                $stmt->bindParam('nom_complet', $data["full-name"]);
                $stmt->bindParam('naissance', $data["birth-date"]);
                $stmt->bindParam('nationalite', $data["nationality"]);
                $stmt->bindParam('situation', $data["situation"]);
                $stmt->bindParam('address', $data["address"]);
                $stmt->bindParam('type_visa', $data["visa-type"]);
                $stmt->bindParam('date_depart', $data["depart-date"]);
                $stmt->bindParam('date_arriver', $data["arrive-date"]);
                $stmt->bindParam('type', $data["doc-type"]);
                $stmt->bindParam('numero_document', $data["doc-num"]);
                if($stmt->execute()) {
                    return true;
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // update single data
        public function updateData($data) {
            try {
                $query = "UPDATE " . $this->table . " SET nom_complet = :nom_complet, naissance = :naissance, nationalite = :nationalite, situation = :situation, address = :address, type_visa = :type_visa, date_depart = :date_depart, date_arriver = :date_arriver, type = :type, numero_document = :numero_document WHERE id = :id";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam('id', $data["id"]);
                $stmt->bindParam('nom_complet', $data["full-name"]);
                $stmt->bindParam('naissance', $data["birth-date"]);
                $stmt->bindParam('nationalite', $data["nationality"]);
                $stmt->bindParam('situation', $data["situation"]);
                $stmt->bindParam('address', $data["address"]);
                $stmt->bindParam('type_visa', $data["visa-type"]);
                $stmt->bindParam('date_depart', $data["depart-date"]);
                $stmt->bindParam('date_arriver', $data["arrive-date"]);
                $stmt->bindParam('type', $data["doc-type"]);
                $stmt->bindParam('numero_document', $data["doc-num"]);
                if($stmt->execute()) {
                    return true;
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // delete single data
        public function deleteData($data) {
            try {
                $query = "DELETE FROM " . $this->table . " WHERE id = :id";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam("id", $data["id"]);
                if($stmt->execute()) {
                    return true;
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // check if user already exist
        public function checkData($data) {
            try {
                $query = "SELECT * FROM " . $this->table . " WHERE nom_complet = :nom_complet AND address = :address";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam("nom_complet", $data["full-name"]);
                $stmt->bindParam("address", $data["address"]);
                if($stmt->execute()) {
                    return $stmt->fetch();
                }else {
                    return false;
                }
            } catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // get highest id
        public function getHighestId() {
            try {
                $query = "SELECT id FROM ". $this->table ." ORDER BY id DESC LIMIT 1";
                $stmt = $this->connect()->prepare($query);
                if($stmt->execute()) {
                    return $stmt->fetch();
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
    }
?>