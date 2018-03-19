package domain

import (
	"github.com/jinzhu/gorm"
)

type (
	Message struct {
		gorm.Model
		Sender         Sender
		Recipient      Recipient
		ConversationID uint32
		TextMessage    string
	}

	Conversation struct {
		gorm.Model
		Message []Message
		Status  string
	}

	Sender struct {
		UID uint
	}

	Recipient struct {
		UID uint
	}
)
