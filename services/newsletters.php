<?php
    header('Access-Control-Allow-Origin: *');
    $newsletters = [];
    foreach (glob("../newsletters/*.pdf") as $name) {
        $name = basename($name, '.pdf');
        $parts = explode("-", $name);
        if ((count($parts) === 2) && is_numeric($parts[0]) && is_numeric($parts[1])) {
            $yearObject = getYear($newsletters, $parts[1]);

            if (!$yearObject) {
                $year = new stdClass();
                $year->year = $parts[1];
                $year->newsletters = [];
                $yearObject = $year;
                array_push($newsletters, $year);
            }
            $newsletter = new stdClass();
            $newsletter->name = date("F", mktime(0, 0, 0, $parts[0], 10));
            $newsletter->file = $name;
            $newsletter->monthNumber = $parts[0];
            array_push($yearObject->newsletters, $newsletter);
        }
    }

    foreach ($newsletters as $k => $v) {
        usort($newsletters, 'cmp');
    }

    ksort($newsletters);

    echo json_encode($newsletters);

    function cmp($a, $b) {
        return $a->year < $b->year;
    }

    function getYear($years, $year) {
        foreach ($years as $k => $v) {
            if ($v->year === $year) {
                return $years[$k];
            }
        }
        return false;
    }
?>