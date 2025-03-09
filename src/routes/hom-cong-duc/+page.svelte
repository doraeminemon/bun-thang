<svelte:head>
	<title>Thuốc Lào Blog - Hòm công đức</title>
	<meta name="description" content="Hòm công đức" />
</svelte:head>
<script>
  import BnbChainImg from '$lib/assets/img/bnb-chain.jpeg';
  import EvmChainImg from '$lib/assets/img/evm-chain.jpeg';
  import TechcombankImg from '$lib/assets/img/techcombank.jpeg';
</script>
<div>
  <h1>Hòm công đức</h1>
  <p class="mb-4">Nếu thấy blog hay, bạn có thể thoải mái gửi tiền vào 1 trong 3 địa chỉ sau:</p>
  <img class="mb-4" src={BnbChainImg} alt="QR code for donation on BNBChain"/>
  <img class="mb-4" src={EvmChainImg} alt="QR code for donation on EVMChain"/>
  <img class="mb-4" src={TechcombankImg} alt="QR code for donation on Techcombank"/>
</div>