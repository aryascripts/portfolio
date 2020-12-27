<template>
    <div class="contact-form">
      <div v-on:click="close" class="heading row-a-c j-c">
        <span>Reach Out</span>
				<div class="x-button">X</div>
      </div>

			
      <form action="/" class="form-content col-a-c" 
	  		name="contact" method="POST"
			data-netlify-recaptcha="true"
			data-netlify="true" netlify>
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<label v-bind:class="{show: showLabel[0]}">Name</label>
					<input 	placeholder="Name"
									type="text" 
									name="name" 
									@focus="toggleName"
									@blur="toggleName" />
				</p>
				<p>
					<label v-bind:class="{show: showLabel[1]}">Email</label>
					<input 	placeholder="Email Address"
									type="email" 
									name="email" 
									@focus="toggleEmail"
									@blur="toggleEmail" />
				</p>
        <p>
          <label v-bind:class="{show: showLabel[2]}">Your Message</label>
          <textarea
									placeholder="Your Message"
									name="message" 
									@focus="toggleMessage"
									@blur="toggleMessage"></textarea>
        </p>
				<div data-netlify-recaptcha="true"></div>
        <p>
          <button class="pointer" type="submit">Send</button>
        </p>
      </form>
    </div>
</template>

<script>
export default {
	data: () => ({
		showLabel: [false, false, false],
	}),
	props: ['close'],
	methods: {
		toggleName() {
			this.toggleIndex(0);
		},
		toggleEmail() {
			this.toggleIndex(1);
		},
		toggleMessage() {
			this.toggleIndex(2);
		},
		toggleIndex(num) {
			const arr = [...this.showLabel];
			arr[num] = !arr[num];
			this.showLabel = arr;
		}
	}
}

</script>

<style scoped lang="scss">
@import '~/sass/vars.scss';

.contact-form {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgb(255, 255, 255);
  top: 0; left: 0;
  z-index: 100;

  .heading {
		@extend %family;
    width: 100%;
    height: 10%;
    max-height: 60px;
    background-color: $blue-bg;
    font-size: 22px;
    font-weight: 600;
    color: $green-light;
		
		span {
			flex-grow: 1;
			text-align: center;
			margin-left: 60px;
		}

		.x-button {
			cursor: pointer;
			width: 60px;
			height:100%;
			font-size: 46px;
		}
  }

	.form-content {
		padding: 25px;
		max-width: 600px;
		margin: 0 auto;

		p {
			display: flex;
			flex-direction: column;
			width: 100%;

			label {
				@extend %family;
				font-weight: 600;
				opacity: 0;
				-webkit-transition: opacity 200ms ease-in;
				transition: opacity 200ms ease-in;
			}

			label.show {
				opacity: 1;
			}

			textarea {
			 height: 200px;
			}

			button {
				padding: 5px 10px;
				@extend %family;
				font-size: 16px;
				font-weight: 600;
				max-width: 120px;
				border-radius: 12px;
				border: 0;
				@extend %header-font;
				background-color: $blue-bg;
				align-self: flex-end;
				color: $green-light;

				&:hover {
					background-color: lighten($blue-bg, 3%);
				}
			}

			input, textarea {
				border-radius: 10px;
				outline: none;
				border: 0;
				padding: 5px;
				@extend %family;
				font-size: 16px;
				background-color: darken($body-bg, 3%);
			}
		}
	}
}
</style>
