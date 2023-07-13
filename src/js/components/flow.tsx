import React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../hooks/use-language'
import { ConceptText, ConceptTitle } from './concept';
import { Text } from './text';
import { BaseProps } from '../types/base-props';

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

const Note = styled.div`
  font-size: 0.8rem;
  color: var(--inverted-text-color);
  line-height: 1.5;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`


export const Flow: FunctionComponent<BaseProps> = () => {
  const {language} = useLanguage()
  return <Outer>
    {
      language === 'en' &&
      <Note>
        *The case that Japan is the construction site. In the case of overseas, we will discuss the conditions according to this.
      </Note>
    }
    {
      language === 'zh' &&
      <Note>
        *设计对象在日本时的流程。如果地点在海外，在这基础上进行沟通调整。
      </Note>
    }
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="01. 問い合わせ相談"
          en="01. Free consultation"
          zh="01.免费咨询"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`まずは電話やメールで気軽にご相談ください。\n用途、規模、予算をもとに、どのような建物ができるかをご説明いたします。\n敷地が決定している場合は現地調査に伺います。`}
          en={`Please feel free to contact us by phone or email.\nWe will explain what kind of building can be built based on the purpose, scale, and budget.\nIf the site has been decided, we will visit the the site to have a field survey.`}
          zh={`请由电话或电子邮件与我们联系。\n我们将根据用途，规模和预算来说明可以建造什么样的建筑物。\n如果决定了地点，我们可以去实地调查。`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="02. 初回提案"
          en="02. First proposal"
          zh="02.概念方案"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`ヒアリングした内容を基に、スケッチにて完成像をご提示します。\n用途、規模からおよその予算も算出でき、大まかな方向性を掴んでいただけます。`}
          en={`Based on the contents of the hearing, we will present the completed image with a sketch.\nWe can calculate the approximate budget from the usage and scale, and you can get a rough idea of ​​the direction.`}
          zh={`我们将以草图描绘出大致的想法。\n我们可以根据使用情况和规模来计算大概的预算，您可以大致了解项目的可行性。`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="03. 契約"
          en="03. Contract"
          zh="03.签订合同"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`設計契約を行い、いよいよ設計が本格的にスタートします。\n設計費は、床面積規模をもとに算出されますが、住宅であれば総工費のおよそ12％程度、\n保育園、クリニックであればおよそ10％程度となります。\n設計費のお支払いは、契約時20％、基本設計完了時30％、実施設計完了時30％、竣工時20％をベースとしています。`}
          en={`After making a design contract, the design will be start.\nThe design cost is calculated based on the floor area scale and usage.\nIn the case of a house, it is about 12% of the total construction cost. And in case of a nursery school or clinic, it will be about 10%.\nPayment of design costs is based on 20% at the time of contract, 30% at the completion of schematic design, 30% at the completion of detailed design, and 20% at the time of completion.`}
          zh={`签订设计合同后，将开始设计。\n设计成本是根据建筑面积比例计算的，如住宅，大约占总建筑成本的12％。如是托儿所或诊所，则约为10％。\n设计费用的支付，一般情况是在合同时20％，基本设计完成时30％，详细设计完成时30％，和完成时20％。`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="04. 設計"
          en="04. Design"
          zh="04.设计"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`基本設計段階では、施主のご要望と敷地の周辺環境を考慮し、建物の形状や平面計画から進めていきます。\n次に、サンプル等を施主と確認し合いながら、窓などの建材、フローリングなどの素材、風呂、キッチンなどの設備の仕様を決定していきます。\n実施設計の段階では、決定された建築形状、仕上げ、設備機器をもとに、工事見積もりや申請用の図面を仕上げていきます。\nまた、詳細の仕様を細かく決めていき、空間をより精緻化していきます。`}
          en={`At the schematic design stage, we will proceed from the shape and plan of the building in consideration of the owner's request and the surrounding environment of the site.\nNext, while confirming samples with the owner, we will determine the specifications of building parts such as windows, materials such as flooring, and equipment such as baths and kitchens.\nAt the detailed design stage, we will finish the drawings for construction estimate and application based on the determined building spec.\nIn addition, we will decide the detailed specifications and further refine the space.`}
          zh={`在基本设计阶段，我们将考虑业主的要求和场地周围的环境，从建筑物的形状和平面入手。\n接下来，在与业主确认性能，外观，色彩后，我们将确定各个如窗户之类的建筑部件，如地板之类的材料，以及如浴室和厨房之类的设备的规格。\n在实施设计阶段，我们将根据确定的建筑形状，材料和设备完成施工概算图和申报图。\n同时，我们将详细决定细节的的规格并进一步完善空间质量。`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="05. 工事費の見積"
          en="05. Estimate of construction cost"
          zh="05.工程造价估算"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`施工会社に見積り依頼をします。\n建築規模によって何社かに相見積もりを依頼します。\n見積もりを受け取った後、工事金額の妥当性を吟味し比較した後、必要に応じて仕様変更を行い、最終的に工事金額と施工会社を決定します。\n見積り調整と同時に役所または確認審査機関に申請業務を行います。\n確認申請が発行され次第、着工できます。`}
          en={`Request an estimate from the construction company.\nWe will ask several companies for a quotation depending on the scale of the building.\nAfter receiving the quotation, we will examine and compare the validity of the construction cost, change the specifications as necessary, and finally decide the construction cost and construction company.\nAt the same time as adjusting the estimate, the application will be submitted to the government office or confirmation inspection body.\nConstruction can begin as soon as the confirmation application is issued.`}
          zh={`向建筑公司索要估算。\n我们将根据建筑物的规模要求几家公司报价。\n收到报价后，我们将检查并比较建筑成本的有效性，必要时更改规格，最后决定建筑成本和建筑公司。\n在调整工程造价的同时，申报将提交给行政机关或确认检查机构。\n申报许可一经发布，便可以开始施工。`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="06. 工事"
          en="06. Construction"
          zh="06.施工"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`週に１日程度工事現場にて定例会議を行います。\n工事が図面通りに行われているかを確認し、必要に応じて是正指示を行います。\nまた、変更等が必要な場合は図面やスケッチにて補足を行います。\n中間・完了検査の際は必要書類を作成し、検査に立会います。`}
          en={`Regular meetings are held at the construction site about one day a week.\nWe will heck that the construction is done according to the drawing, and give corrective instructions if necessary.\nIn addition, if changes are required, we will add drawings and sketches.\nAt the time of intermediate / completion inspection, we will prepare the necessary documents and witness the inspection.`}
          zh={`每周大约一天在建筑工地开例会。\n检查施工是否按照图纸进行，并在必要时提供修改指示。\n此外，如果需要更改，我们将补充图纸和草图。\n在进行中间/完成检查时，我们将准备必要的文件并见证检查。`}
        />
      </ConceptText>
    </FlowItem>
    <FlowItem>
      <ConceptTitle>
        <Text
          ja="07. 検査、引渡し"
          en="07. Inspection and handover"
          zh="07.检验和交付"
          />
      </ConceptTitle>
      <ConceptText language={language}>
        <Text
          ja={`設計者、施工者、お客様の三者立ち会いのもと、施工不良や汚れなどの検査を行い、修正を行った後にお引渡しとなります。\nまた、設備等の使い方のご説明も行われます。\n自然素材を使用する場合は特に、建材は生きていて、時間経過とともに状態は変化します。\nお住まいになってから通常一年経過した時点で、一年検査を施工者が行い、不具合を是正します。`}
          en={`In the presence of the designer, the builder, and the customer, we will inspect for construction defects and dirt, make corrections, and then hand over the building.\nIn addition, explanations on how to use the equipment will be given.\nBuilding materials are alive, especially when using natural materials, and their condition changes over time.\nUsually, one year after you live, the contractor will perform a one-year inspection to correct any problems.`}
          zh={`在设计师，建筑商和客户在场的情况下，我们将检查施工缺陷和污垢，进行更正，然后移交建筑物。\n此外，还将对设备等做使用说明。\n建筑材料是活的，尤其是在使用天然材料时，它们的状况会随着时间而变化。\n通常，在您居住一年后，承包商将进行竣工一年后检查以纠正问题。`}
        />
      </ConceptText>
    </FlowItem>
  </Outer>
}
