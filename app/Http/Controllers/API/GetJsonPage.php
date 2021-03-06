<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use PHPHtmlParser\Dom;
use PHPHtmlParser\Exceptions\ChildNotFoundException;
use PHPHtmlParser\Exceptions\NotLoadedException;use stringEncode\Exception;

class GetJsonPage extends Controller
{
    function makeJSONFromSite() {
        $url = 'manon-thivant.xyz';
        $arrays = [];
        $client = new Client();

        $response = $client->request(
            'GET',
            $url
        );

        $html = $response->getBody()->getContents();

        if ($response->getStatusCode() === 200) {
            $dom = new Dom;
            $dom->load($html);
            $sections = $dom->find('section');
            foreach ($sections as $section) {
                // title
                $title = $section->find('h2');
                // content
                $content = $section->find('article');
                $element = [
                    'name' => $title->innerHTML,
                    'content' => $content->innerHTML
                ];
                $arrays[] = $element;
            }
        }
        $json = json_encode($arrays, JSON_PRETTY_PRINT);
        dd($json);

        return json_encode($json);
    }
    // $content = [
    //  cle: contenu,
    //  cle: contenu
    //  ...
    //]
    function advancedMakeJSONFromSite(Request $request) {
        $url = 'manon-thivant.xyz';
        // change &id; in url cause # don't wor
        $properContent = str_replace('&id;', '#', $request);

        // separate the differents key:value
        $arrayContents = explode('|', $properContent);

        // separate keys and values and save in array separate from the other keys and values
        $arraysOfKeysValues = [];
        foreach ($arrayContents as $concatContent) {
            $arraysOfKeysValues[] = explode(':', $concatContent);
            // $arrays = [$arraysOfKeysValues[0] => []];
        }

        // --- MakeJsonFromSite
        $arrays = [];

        $client = new Client();

        $response = $client->request(
            'GET',
            $url
        );

        $html = $response->getBody()->getContents();

        if ($response->getStatusCode() === 200) {
            $dom = new Dom;
            $dom->load($html);

            $count = 0;
            $valuesArray = [];
            $keysArray = [];
            foreach ($arraysOfKeysValues as $arrayOfKeysValues) {;
                $keysArray[] = $arrayOfKeysValues[0];
                try {
                    $elements = $dom->find($arrayOfKeysValues[1]);
                } catch (ChildNotFoundException $e) {
                    throw new Exception($e);
                } catch (NotLoadedException $e) {
                    throw new Exception($e);
                }
                $valuesArrayTemp = [];
                foreach ($elements as $element) {
                    $valuesArrayTemp[] =  $element->innerHTML;
                }
                $valuesArray[] = $valuesArrayTemp;
                $count++;
            }

            $arrays = array_combine($keysArray, $valuesArray);
        }
        $json = json_encode($arrays, JSON_PRETTY_PRINT);
        dd($json);

        return json_encode($json);
    }
}
