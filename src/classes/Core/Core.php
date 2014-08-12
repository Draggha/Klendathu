<?php
error_reporting(0);
/**
 * Klendathu Bug Tracker
 * User: chaensel
 * Date: 12.08.14
 * Time: 21:22
 */


define("DB_USER", "chaensel");
define("DB_PASS", "blah");

class Core extends Sag {

    /**
     * @var Sag
     */
    public $db;
    public $returnObject;




    /**
     * Constructor given the Sag $db paramater in file src/classes/loader.php
     * @param Sag $db
     */
    public function __construct(Sag $db = null)
    {
        unset($this->returnObject);
        $this->returnObject = new StdClass();
        $this->returnObject->created = time();
        if($db !== null)
        {
            $this->db = $db;
            echo $this->db->login(DB_USER, DB_PASS);
            print_r($this->db->get('Klendathu'));
            echo '<pre>';
            print_r($this->db);

        }
    }



    /**
     * Just a frickin test - Move on, nothing to see here...
     *
     */
    public function test()
    {
        $ret = $this->db->getAllDatabases();
        $this->returnObject->databases = $ret;
        self::returnIt();
    }

    public function preThis($whatToPre)
    {
        echo '<pre>';
        print_r($this);
        echo '</pre>';
    }

    public function returnIt()
    {
        $ret = json_encode($this->returnObject);
        echo $ret;
    }




} 