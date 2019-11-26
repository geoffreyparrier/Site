<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use PHPHtmlParser\Dom;

class GetJsonPage extends Controller
{
    function makeJSONFromSite($data) {
        [$url, $params] = $data;
        $json = [];
        $client = new Client();

        $response = $client->request(
            'GET',
            $url
        );

        $html = $response->getBody()->getContents();

        if ($response->getStatusCode() === 200) {
            $dom = new Dom;$dom->load($html);
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
                $json[] = $element;
            }
        }

        dd(json_encode($json));

        return json_encode($json);
    }

    function advancedMakeJSONFromSite($data) {
        [$url, $params] = $data;
        $json = [];
        $client = new Client();

        $response = $client->request(
            'GET',
            $url
        );

        $html = $response->getBody()->getContents();

        if ($response->getStatusCode() === 200) {
            $dom = new Dom;$dom->load($html);
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
                $json[] = $element;
            }
        }

        dd(json_encode($json));

        return json_encode($json);
    }
}
