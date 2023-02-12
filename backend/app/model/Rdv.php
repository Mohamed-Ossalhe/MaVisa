<?php
    class RDV extends DB {
        // table name
        private $table = "rdv";
        // insert new data
        public function insertData($data) {
            try {
                $query = "INSERT INTO ". $this->table ." (rdv_date,rdv_time,user_id,status) VALUES (:date, :time, :user_id, :status)";
                $stmt = $this->connect()->prepare($query);
                $stmt->bindParam("date", $data["rdv-date"]);
                $stmt->bindParam("time", $data["rdv-time"]);
                $stmt->bindParam("user_id", $data["user-id"]);
                $stmt->bindParam("status", $data["rdv-status"]);
                if($stmt->execute()) {
                    return true;
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
        // get all data
        public function getAllData() {
            try {
                $query = "SELECT rdv_date,rdv_time FROM " . $this->table;
                $stmt = $this->connect()->prepare($query);
                if($stmt->execute()) {
                    return $stmt->fetchAll();
                }else {
                    return false;
                }
            }catch(PDOException $e) {
                return $e->getMessage();
            }
        }
    }
?>