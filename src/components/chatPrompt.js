import React from 'react'
import "./../static/styles.css"

function ChatPrompt() {
  return (
    <div id="app" class="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-6 space-y-6">
            <div id="errorMessage" class="hidden text-red-500 text-center"></div>
            <div id="startMessage" class="text-green-500 text-center mt-4">App is ready. Tap or shake to start.</div>
            <div class="text-center">
                <div id="micBtnWrapper" class="mic-button-wrapper">
                    <button id="micBtn" class="mic-button text-4xl text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out">
                        <i class="fas fa-microphone"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatPrompt