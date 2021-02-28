import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ConceptText, ConceptTitle } from './concept';
import { Text } from './text';

const Outer = styled.div`
`

const FlowItem = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 3.5rem;
  }
`


export const Flow: FunctionComponent = () => {
  return <Outer>
    <FlowItem>
      <ConceptTitle>
        <Text ja="01. 無料相談" en="01. Free consultation" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`まずは電話やメールで気軽にご相談ください。\n用途、規模、予算をもとに、\nどのような建物ができるかをご説明いたします。\n敷地が決定している場合は現地調査に伺います。`}
          en={`Please feel free to contact us by phone or email. \ nWe will explain what kind of building you can build based on the purpose, scale, and budget. \ nIf the site has been decided, we will visit the field survey.`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text ja="02. 初回提案" en="02. First proposal" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`ヒアリングした内容を基に、\nスケッチにて完成像をご提示します。\n用途、規模からおよその予算も算出でき、\n大まかな方向性を掴んでいただけます。`}
          en={`Based on the contents of the hearing, we will present the completed image with a \ n sketch. \ nYou can calculate the approximate budget from the usage and scale, \ nyou can get a rough idea of ​​the direction.`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text ja="03. 契約" en="03. Agreement" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`設計契約を行い、いよいよ設計が本格的にスタートします。\n設計費は、床面積規模をもとに算出されますが、\n住宅であれば総工費のおよそ10％程度、\n保育園、クリニックであればおよそ7％程度となります。\n設計費のお支払いは、契約時20％、基本設計完了時30％、\n実施設計完了時30％、竣工時20％をベースとしています。`}
          en={`After making a design contract, the design will finally start in earnest. \ nThe design cost is calculated based on the floor area scale, but \ nfor a house, it is about 10% of the total construction cost, and \ n for a nursery school or clinic, it is about 7%. \ nPayment of design costs is based on 20% at the time of contract, 30% at the completion of basic design, \ n30% at the completion of implementation design, and 20% at the time of completion.`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text ja="04. 設計" en="04. design" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`基本設計段階では、施主のご要望と敷地の周辺環境を考慮し、\n建物の形状や平面計画から進めていきます。\n次に、サンプル等を施主と確認し合いながら、窓などの建材、\nフローリングなどの素材、風呂、キッチンなどの\n設備の仕様を決定していきます。\n実施設計の段階では、決定された建築形状、\n仕上げ、設備機器をもとに、\n工事見積もりや申請用の図面を仕上げていきます。\nまた、詳細の仕様を細かく決めていき、\n空間をより精緻化していきます。`}
          en={`At the basic design stage, we will proceed from the shape and plan of the building, taking into consideration the request of the owner and the surrounding environment of the site. \ nNext, while checking samples with the owner, we will determine the specifications of building materials such as windows, \ n materials such as flooring, and \ n equipment such as baths and kitchens. \ nIn the implementation design stage, \ nWe will finish the construction estimate and drawings for application based on the determined building shape, \ nfinishing, and equipment. \ nIn addition, we will decide the detailed specifications in detail and make the space more elaborate.`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text ja="05. 工事費の見積" en="05. Estimate of construction cost" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`施工会社に見積り依頼をします。\n建築規模によって何社かに相見積もりを依頼します。\n見積もりを受け取った後、工事金額の妥当性を吟味し比較した後、\n必要に応じて仕様変更を行い、\n最終的に工事金額と施工会社を決定します。\n見積り調整と同時に役所または確認審査機関に申請業務を行います。\n確認申請が発行され次第、着工できます。`}
          en={`Request an estimate from the construction company. \ n We will ask some companies for a quotation depending on the scale of the building. \ nAfter receiving the quotation, after examining and comparing the validity of the construction amount, \ nchange the specifications as necessary, \ nfinally determine the construction amount and construction company. \ n At the same time as adjusting the estimate, the application will be submitted to the government office or confirmation inspection body. \ n Construction can be started as soon as the confirmation application is issued.`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text ja="06. 工事" en="06. Construction" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`週に１日程度工事現場にて定例会議を行います。\n工事が図面通りに行われているかを確認し、\n必要に応じて是正指示を行います。\nまた、変更等が必要な場合は図面やスケッチにて補足を行います。\n中間・完了検査の際は必要書類を作成し、検査に立会います。`}
          en={`Regular meetings are held at the construction site about one day a week. \ nCheck that the construction is done according to the drawing, \ n and give corrective instructions if necessary. \ n Also, if changes are necessary, we will supplement with drawings and sketches. \ n At the time of intermediate / completion inspection, we will prepare the necessary documents and witness the inspection.`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text ja="07. 検査、引渡し" en="07. Inspection, delivery" />
      </ConceptTitle>
      <ConceptText>
        <Text
          ja={`設計者、施工者、お客様の三者立ち会いのもと、\n施工不良や汚れなどの検査を行い、\n修正を行った後にお引渡しとなります。\nまた、設備等の使い方のご説明も行われます。\n自然素材を使用する場合は特に、建材は生きていて、\n時間経過とともに状態は変化します。\nお住まいになってから通常一年経過した時点で、\n一年検査を施工者が行い、不具合を是正します。`}
          en={`In the presence of the designer, the builder, and the customer, \ ninspect the construction defects and dirt, and \ ncorrect it before handing it over. \ n Also, explanations on how to use the equipment will be given. \ nThe building materials are alive, especially when using natural materials, \ n and their condition changes over time. \ n Normally, one year after you live, \ n the contractor will perform a one-year inspection to correct any problems.`}
        />
      </ConceptText>
    </FlowItem>
  </Outer>
}