<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .content {
        flex: 1;
        overflow: auto;
        padding: 40px;
        color: #333333;
    }

    .content h1 {
        text-align: center;
    }

    .content h2 {
        margin-top: 50px;
    }

    .content p {
        margin-top: 30px;
        color: #666666;
        font-size: 35px;
        line-height: 50px;
    }

    .content h3 {
        margin-top: 10px;
        font-weight: normal;
        color: #999999;
        font-size: 35px;
        line-height: 50px;
    }

    .content h4 {
        margin-top: 30px;
        padding-bottom: 50px;
        font-size: 40px;
        line-height: 55px;
    }

</style>

<template>
    <div class="container">
        <Header :title="'用户注册协议'"></Header>
        <div class="content">
            <h1 class="font-d3">【用户注册许可协议】</h1>
            <h2 class="font-h1">第一条【注册须知】</h2>
            <p>请您(“用户”)仔细阅读本协议全部条款，并确认您已完全了解本协议之内容。</p>
            <p>未成年人应当在监护人的陪同和指导下阅读本协议，并在使用本协议项下服务前取得监护人的同意。</p>
            <p>请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本 协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束，
                本协议将构成您与湖南贝湾科技有限公司及关联方(以下简称“贝湾”)与其主办的洞庭湖通识课应用程序 (以下简称“APP”)之间具有直接约束力的法律文件。</p>
            <h2 class="font-h1">第二条【合法及授权】</h2>
            <p>请确认您依照中华人民共和国法律、行政法规、部门规章、规范性文件等法律法规、及您所在地之法律、 及您自愿或应当接收其管辖之法律(以下合称“法律”)，有权签署并同意接受本协议的约束。如果您代表
                您的雇主或单位，请在签署前，确认并保证您已获得签署本协议的充分授权。</p>
            <h2 class="font-h1">第三条 【协议变更】</h2>
            <p>本协议如果变更，贝湾将尽可能提前在 APP 发布通知。但您应了解并同意，贝湾有可能未经事先通知对本协议的全部或部分内容进行修改或变更，您亦应随时关注本协议是否有修改或变更之情形。</p>
            <p>如果本协议修改或变更，而您不能接受修改或变更后的内容，您可以停止使用 APP。如果您继续使用 APP， 则表明您完全接受并愿意遵守修改或变更后的本协议。</p>
            <p>无论您停止使用或继续使用 APP，您都承诺不因本协议修改或变更给您造成的损失或不便而向湖南贝湾科 技有限公司及关联方或 APP 要求赔偿或补偿。</p>
            <h2 class="font-h1">第四条 【服务方式】</h2>
            <p>贝湾是一家网络音视频内容提供者，针对不同传播渠道用户为其提供内容服务，前述传播渠道包括但不限于:</p>
            <h3>1)通过 APP 展示的服务;</h3>
            <h3>2)APP 提供的可以使用的其他传播渠道。</h3>
            <p>除免费服务外，APP 可能提供部分收费服务。您可以通过付费方式购买收费服务，具体方式为:通过网上 银行或其他 APP 提供的付费途径支付一定数额的人民币，从而获得收费服务使用权限。对于收费服务，APP
                会在您使用之前给予明确的提示，只有根据提示确认其同意按照前述支付方式支付费用并完成了支付行为， 才能使用该等收费服务。支付行为的完成以银行或第三方支付平台生成“支付已完成”的确认通知为准。</p>
            <p>您应了解贝湾可能对该等服务(含收费服务)进行更改、更新或提高，并承诺不因更改、更新或提高其服 务给您造成的损失或不便而向湖南贝湾科技有限公司及关联方或 APP 要求赔偿或补偿。</p>
            <h2 class="font-h1">第五条【善意使用】</h2>
            <p>您同意，遵守法律及本协议规定，秉承善意使用 APP，且保证:</p>
            <h3>1)不会利用 APP 进行非法活动、或进行侵犯他人权利或损害他人利益的活动;不会以非法方式获取或利 用 APP 其他用户的信息。</h3>
            <h3>2)不会以技术方式攻击或破坏或改变 APP 的部分或全部、或干扰其运行;不会以非法方式获取或使用 APP 的任何软件、代码或其他技术或商业信息;不会对 APP 运行的任何程序进行反向工程、反向编译、反向汇
                编或改写。</h3>
            <h3>3)不会未经许可使用 APP 的网站名称、公司名称、商标、商业标识、网页版式或内容、或其他由湖南贝 湾科技有限公司及关联方或 APP 享有知识产权或权利的信息或资料;不会侵犯湖南贝湾科技有限公司及关 联方或
                APP 的商标权、著作权、专利权、其他知识产权或其他合法权利或权益。不会以任何方式贬损湖南 贝湾科技有限公司及关联方或 APP 的商业声誉。</h3>
            <h3>4)不会利用 APP 进行其他违背公序良俗的活动。</h3>
            <p>您使用 APP 的记录，可能被保存作为对您不利的证据。</p>
            <p>APP 也可能将您违反法律或侵犯第三方权利或权益的记录报告给行政主管部门、司法机关。</p>
            <h2 class="font-h1">第六条 【注册账号】</h2>
            <p>您需要在 APP 注册一个账号，并按照 APP 的要求为该账号设置密码 ，才可以使用该账号登录并使用 APP。 您可依照 APP 的要求修改您的账号密码，但不可修改账号。</p>
            <p>您注册账号时，应按照 APP 的提示及要求填写或提供资料、信息，并确保用户身份及信息的真实性、正确 性及完整性;如果资料发生变化，您应及时更改。</p>
            <p>您同意并承诺:</p>
            <h3>1)不故意冒用他人信息为您注册帐号;</h3>
            <h3>2)不未经他人合法授权以他人名义注册帐号;</h3>
            <h3>3)不使用色情、暴力或侮辱、诽谤他人等违反公序良俗的词语注册帐号。</h3>
            <p>如您违反前述规定，贝湾或 APP 有权随时拒绝您使用该账号，或者限制您使用，或者注销该账号。</p>
            <h2 class="font-h1">第七条 【账号使用】</h2>
            <p>在您完成账号注册后，APP 将向您提供帐号及初始密码信息，此后，您应自行保管及维持密码及帐号的安 全。您应自行使用该账号，并对任何人利用您的帐号及密码所进行的活动负完全的责任。</p>
            <p>您应了解，在账号和密码匹配时，贝湾或 APP 无法对非法或未经您授权使用您帐号及密码的行为作出甄别， 因此，贝湾或 APP 对任何使用您账号和密码登录并使用 APP 的行为不承担任何责任。</p>
            <p>您同意并承诺:</p>
            <h3>1) 当您的帐号或密码遭到未获授权的使用，或者发生其他任何安全问题时，您会立即有效通知到 APP;</h3>
            <h3>2) 当您每次上网或使用其他服务完毕后，会将有关帐号等安全退出;</h3>
            <h3>3) APP 有权根据自己的判定，在怀疑账号被不当使用时，拒绝账号使用或限制账号使用或注销该账号。 如您连续 180 天未以账号登录 APP，则 APP 有权根据自己的判定，注销该账号且无需事先向您发送通知。
                在冻结期内用户可以通过密保邮箱+手机验证码、原始密码+手机验证码、客服申诉等途径解除冻结，具体 操作方式用户可在贝湾公司网站合适位置查询或咨询客服了解。</h3>
            <h2 class="font-h1">第八条 【个人信息及隐私条款】</h2>
            <p>APP 可能需要搜集能识别用户身份的个人信息以便可以在必要时联系用户，或为用户提供更好的使用体验。 “个人信息”包括但不限于用户的姓名、性别、年龄、出生日期、联系电话、身份证号、地址、受教育情
                况、公司情况、所属行业、兴趣爱好、所处位置信息、个人说明、手机软硬件信、手机识别码等。</p>
            <p>APP 承诺，不以非法方式披露您依照 APP 规定的方式标明应予保密的用户个人信息。</p>
            <p>您了解并同意，APP 可依照法律或司法、行政机关的强制性命令对第三方披露您的个人信息且无需事先向 您发出通知。</p>
            <p>您了解并同意，当您购买在 APP 列出的商品或服务时，您的信息将被提供前述商品或服务商家收集，您应 自行承担此类信息披露的责任。</p>
            <p>您了解并同意，APP 在下述情形下可利用您的个人信息:</p>
            <h3>1) 在紧急情况下，为维护用户及公众的权益;</h3>
            <h3>2) 为维护 APP 的著作权、商标权、专利权及其他任何合法权利或权益;</h3>
            <h3>3) 在进行促销或抽奖时，APP 可能会与赞助商共享用户的个人信息，在这些情况下 APP 会在发送用户信 息之前进行提示，并且用户可以通过明确表示不参与活动而终止传送过程;</h3>
            <h3>4) 为获取第三方数据而将用户信息与第三方数据匹配;</h3>
            <h3>5) 将用户数据用于统计，以便向未来的合作伙伴、广告商及其他第三方以及为了其他合法目的而描述 APP 的服务;</h3>
            <h3>6) 其它为支持向 APP 用户提供服务的合法行为。</h3>
            <p>尊重用户隐私是贝湾的基本政策。贝湾将按照 APP 上公布的《隐私政策》收集、存储、使用、披露和保护 您的个人信息。请您完整阅读相关隐私权政策，以帮助您更好地保护您的个人信息。</p>
            <h2 class="font-h1">第九条 【知识产权声明】</h2>
            <p>湖南贝湾教育科技有限公司对 APP 服务及 APP 所使用的软件所包含的受知识产权法或其他法律保护的全部 资料享有相应权利。APP 的整体内容(包括但不仅限于设计图样以及其他图样、产品及服务名称)版权归
                湖南贝湾教育科技有限公司所享有，任何人不得使用、复制或用作其他用途。</p>
            <p>经由 APP 传送的文字、图片、音频、视频及其他内容，受到著作权法、商标法、专利法或其他法律的保护; 未经湖南贝湾教育科技有限公司书面授权许可，您不得自行或许可第三方进行修改、出租、售卖或衍生其
                他作品。</p>
            <p>湖南贝湾教育科技有限公司对其专有内容、原创内容和其他通过授权取得的独占或者独家内容享有知识产 权。未经湖南贝湾教育科技有限公司书面许可，任何单位和个人不得私自转载、传播和提供收听服务或者
                有其他侵犯湖南贝湾教育科技有限公司知识产权的行为。否则，将承担相应法律责任。</p>
            <p>为了促进知识的分享和传播，您将在 APP 上发表的全部内容(包括但不仅限于留言、评论和笔记)，授予
                贝湾免费的、不可撤销的、非独家使用许可，贝湾有权将该内容用于贝湾各种形态的产品和服务上，包括但不限于APP以及发表的应用或其他互联网产品。</p>
            <p>您在 APP 上传或发表的内容，应保证其为著作权人或已取得合法授权，并且该内容不会侵犯任何第三方的
                合法权益。如果第三方提出关于著作权的异议，贝湾有权根据实际情况删除相关的内容，且有权追究用户的法律责任。给贝湾或任何第三方造成损失的，用户应负责全额赔偿。</p>
            <p>贝湾有权对您发布的内容进行审核，有权根据相关证据结合《侵权责任法》、《信息网络传播权保护条例》 等法律法规及贝湾内部工作原则对侵权信息进行处理。</p>
            <h2 class="font-h1">第十条 【第三方链接】</h2>
            <p>为方便您使用，APP 可能会提供第三方国际互联网网站或资源链接。您应了解，除非另有声明，APP 无法
                对第三方网站服务进行控制。您因下载或传播或使用或依赖上述网站或资源所生的损失或损害，应由您自行承担全部责任。</p>
            <h2 class="font-h1">第十一条 【容忍义务】</h2>
            <p>您应了解，基于不同用户的个人特征和喜好，APP 可能存在一些让您不快、厌恶或难以接受的内容。您承 诺，不就前述内容追究贝湾或第三方的任何责任。</p>
            <h2 class="font-h1">第十二条 【商业活动及通知】</h2>
            <p>您了解并接受，APP 为维护其运营所经营，可能进行下述商业活动:</p>
            <h3>1) 通过电子邮件、客户端、网页或其他合法方式向用户发送商品促销或其他相关商业信息。</h3>
            <h3>2) 通过增值服务系统或其他方式向用户发送的相关服务信息或其他信息，其他信息包括但不限于通知信 息、宣传信息、广告信息等。</h3>
            <p>所有 APP 发给您的通知都可通过电子邮件、常规信件或在 APP
                显著位置公告的方式进行传送。贝湾将通过上述方法之一将消息传递给您，告知您服务条款的修改、服务变更或其他重要事宜。</p>
            <h2 class="font-h1">第十三条 【非商业使用】</h2>
            <p>您同意，仅以非商业目的使用 APP;不对 APP 的任何部分或全部进行商业性质利用、复制、拷贝、出售、 调查、广告，或将 APP 用于其他任何商业目的或商业性质的活动;但 APP 与您另行签订有协议或 APP
                另 行指定可供您使用的特定商业服务除外。</p>
            <h2 class="font-h1">第十四条 【网络运行】</h2>
            <p>APP 尽可能保证其稳定运行。</p>
            <p>您应理解并同意，因法律、政策、技术、经济、管理的原因，除非您和 APP 另有约定，APP 不会因以下情 形出现而对您承担责任:</p>
            <h3>1)APP 无法使用或中断使用或无法完全适合用户的使用要求。</h3>
            <h3>2)APP 到干扰，无法及时、安全、可靠运行，或出现任何错误。</h3>
            <h3>3)经由 APP 取得的任何产品、服务(含收费服务)或其他材料不符合您的期望。 </h3>
            <h3>4)用户资料遭到未经授权的使用或修改。</h3>
            <p>APP 不对您在本本协议项下服务中相关数据的删除或储存失败负责。APP 可以根据实际情况自行决定用户 在本服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。如您停止使用 APP，或 APP
                所提供的服务终止或中止，APP 可以从服务器上永久地删除用户的数据。APP 没有义务向用户返还任何数 据。</p>
            <h2 class="font-h1">第十五条 【服务终止】</h2>
            <p>本协议或本协议项下 APP 所提供的服务(含收费服务)可在下述情形下部分或全部中止或终止: </p>
            <h3>1) 不可抗力。</h3>
            <h3>2) 因法律规定，或 APP 服从行政命令或司法判令的要求。</h3>
            <h3>3) 用户违反本协议。</h3>
            <h3>4) APP 认为应予终止的其他情形。</h3>
            <p>在一般情形下，APP 会提前按照您提供的联系方式以电子邮件或短信或其他电子方式通知您，服务将中止 或终止。您应了解并同意，在紧急情况或特殊下，APP 可能不经通知即中止或终止服务。</p>
            <p>在本协议或本协议项下 APP 提供的服务(含收费服务)中止或终止时，APP 有权: </p>
            <h3>1) 拒绝用户登录 APP;</h3>
            <h3>2) 删除用户信息;</h3>
            <h3>3) 删除用户购买的内容。</h3>
            <p>您同意，不因本协议或本协议项下 APP 所提供的服务中止或终止，而要求湖南贝湾教育科技有限公司或 APP向您作出赔偿或补偿或承担任何其他责任。</p>
            <h2 class="font-h1">第十六条 【法律适用】</h2>
            <p>您在使用 APP 时，应遵守中华人民共和国法律、及您所在地之法律、及您自愿或应当接收其管辖之法律。 本协议的解释及履行应按照中华人民共和国法律进行。</p>
            <h2 class="font-h1">第十七条 【法律责任】</h2>
            <p>您应就所上传的内容承担全部法律责任;无论前述责任是因侵犯第三方权利所引起的、或因您违反与第三 方或本协议引起的、或因您违反法律引起的;前述责任包括对 APP 或第三方所承担的民事责任、或行政机
                关要求承担的行政责任或刑事责任。</p>
            <p>您同意，如因您违反法律规定或本协议规定给 APP 造成损失，您将充分赔偿 APP 所遭受的损失、包括其直 接损失、间接损失、预期利益损失等一切损失。</p>
            <p>您承诺，如因第三方向您主张权利而导致您承担责任，或您承担行政责任或刑事责任的，您不以此为理由 追究 APP 的责任。</p>
            <p>如您应向 APP 承担责任，前述责任不因本协议或本协议项下的服务被终止而免除。</p>
            <h2 class="font-h1">第十八条 【相关协议】</h2>
            <p>APP 可能不时发布针对用户的相关协议，并可能将该相关协议作为对本协议的补充或修改而将其内容作为 本协议的一部分。请您及时关注并阅读相关协议。</p>
            <h2 class="font-h1">第十九条 【争议解决】</h2>
            <p>您和 APP 均同意，因本协议解释或执行引起的任何争议，双方应首先友好协商解决。协商不成时，则任一 方均可将争议提交长沙仲裁委员会依据其届时有效的仲裁规则以仲裁方式解决。仲裁地点为长沙，仲裁语
                言为中文。仲裁裁决为终局的，对各方均有法律约束力。</p>
            <h4>请您再次确认您已全部阅读并充分理解上述协议。</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "agreement",
        data() {
            return {}
        },
        mounted() {

        },
        methods: {},
        beforeDestroy() {

        }
    }
</script>

