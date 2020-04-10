---
title: "MLOps test"
layout: page
---

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
​
​
<div class="page-layout-xl--default">
  <table class="table table-striped">
    <thead>
      <tr>
      <th class="table-head" scope="col" style="width: 200px;"></th>
      <th class="table-head" scope="col">Open-Format</th>
      <th class="table-head" scope="col">Vendor</th>
      <th class="table-head" scope="col">File Extension</th>
      <th class="table-head" scope="col">Licencse</th>
      <th class="table-head" scope="col">ML Tools &amp; Platforms Support</th>
      <th class="table-head" scope="col">Human-readable</th>
      <th class="table-head" scope="col">Compression</th>
    </tr>
​
  </thead>
  <tbody>
    <tr>
      <td scope="row"><b>"almagination"</b></td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
    </tr>
    <tr>
      <td scope="row"><b>PMML</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td>DMG</td>
      <td>.pmml</td>
      <td>AGPL</td>
      <td>R, Python, Spark</td>
      <td><b style="font-size: 20pt;">✓</b> (XML)</td>
      <td><b style="font-size: 20pt;">✘</b></td>
    </tr>
    <tr>
      <td scope="row"><b>PFA</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td>DMG</td>
      <td>JSON</td>
      <td></td>
      <td>PFA-enabled runtime</td>
      <td><b style="font-size: 20pt;">✓</b> (JSON)</td>
      <td><b style="font-size: 20pt;">✘</b></td>
    </tr>
    <tr>
      <td scope="row"><b>ONNX</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td>SIG<br>LFAI<br></td>
      <td>.onnx</td>
      <td></td>
      <td>TF, CNTK, Core ML, MXNet, ML.NET</td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
    </tr>
    <tr>
      <td scope="row"><b>TF Serving Format</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td>Google</td>
      <td>.pf</td>
      <td></td>
      <td>Tensor Flow</td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td>g-zip</td>
    </tr>
    <tr>
      <td scope="row"><b>Pickle Format</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td></td>
      <td>.pkl</td>
      <td></td>
      <td>scikit-learn</td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td>g-zip</td>
    </tr>
    <tr>
      <td scope="row"><b>JAR/ POJO</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td></td>
      <td>.jar</td>
      <td></td>
      <td>H2O</td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
    </tr>
    <tr>
      <td scope="row"><b>HDF</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td></td>
      <td>.h5</td>
      <td></td>
      <td>Keras</td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
    </tr>
    <tr>
      <td scope="row"><b>MLEAP</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
      <td></td>
      <td>.jar/ .zip</td>
      <td></td>
      <td>Spark, TF, scikit-learn</td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td>g-zip</td>
    </tr>
    <tr>
      <td scope="row"><b>Torch Script</b></td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td></td>
      <td>.pt</td>
      <td></td>
      <td>PyTorch</td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
    </tr>
    <tr>
      <td scope="row"><b>Apple .mlmodel</b></td>
      <td><b style="font-size: 20pt;">✘</b></td>
      <td>Apple</td>
      <td>.mlmodel</td>
      <td></td>
      <td>TensorFlow, scikit-learn, Core ML</td>
      <td><b style="font-size: 20pt;">−</b></td>
      <td><b style="font-size: 20pt;">✓</b></td>
    </tr>
    </tbody>
  </table>
</div>

Test test test

<div class="page-layout-xl--default">
      <table class="table table-striped" border="1">
      <thead>
        <tr>
          <th class="table-head" scope="col" colspan="4"> Machine Learning Model Serving Taxonomy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <td scope="row" colspan="3"><b>ML Model Artifact</b></td>
        </tr>
        <tr>
          <td scope="row"><b>Service & Versioning</b></td>
          <td ><b>together with the consuming application</b></td>
          <td colspan="2"><b>independent from the consuming application</b></td>
        </tr>
        <tr>
          <td scope="row"><b>Compile/ Runtime availabilty</b></td>
          <td><b>build & runtime availabe</b></td>
          <td><b>available remotely through REST API/RPC</b></td>
          <td><b>available at the runtime scope</b></td>
        </tr>
        <tr>
          <td scope="row" rowspan="2"><b>Serving Patterns</b></td>
          <td><b>Model-as-Dependency</b></td>
          <td><b>Model-as-Service</b></td>
          <td><b>precompute Model-as-Data (Model on Demand)</b></td>
        </tr>
        <tr>
          <td scope="row" colspan="2"><b>Hybrid Model Serving (Federated Learning)</b></td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>

</body>
</html>


