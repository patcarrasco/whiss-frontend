const ws = () => {
	const createChannel = (consumer, channelSettings, handleReceivedData) => {
		return consumer.subscriptions.create(channelSettings, {
	    received: (data) => {
	    	handleReceivedData(data);
	    },
	    connected: function() {
	      console.log("Connected")
	    },
	    disconnected: function() {
	      console.log("Disconnected")
	    },
	    rejected: function() {
	      console.log("Rejected")
	    },
	    transmit: (dataToSend) => {
	    	this.perform("transmit", {"data": dataToSend});
	    }
	  });
	}

	const deleteChannel = (channel) => {
		channel.unsubscribe();
	}

	const sendMessage = (message, messageChannel) => {
		// {
		// 	content: "",
		// 	user_id: 1,
		// 	chat_id: 2
		// }
		messageChannel.transmit(message);
	}
	const sendChat = (chat, chatChannel) => {
		// {
		// 	title: "",
		// 	initialContent: {user_id: 1, content: ""},
		// 	friends: [user_id, id1, id2, id3]
		// }
		chatChannel.transmit(chat);
	}
	const sendWhisper = (whisper, whisperChannel) => {
		// {
		// 	content: "",
		// 	user_id: 1,
		// 	friends: [id1, id2, id3]
		// }
		whisperChannel.transmit(whisper);
	}
}

export default ws;