
@Library('pri-legacy-shared-libraries@master') _

import com.primerica.jenkins.pipelines.*

new LegacyPipeline(this,
[
	projectSpace: 'Legacy',
	jenkinsLabel: 'lxpjenkins02',
	configType: 'npm',
	buildDebugmode: 'off',
	unittestDebugmode: 'off',
	sonarqubeProject: 'registration-frontend',
        sonatypeIqApp: 'registration-frontend',
	nodeVersion: 'v8.11.2',
	autoDeploytoDev: 'on',
	copytoLocation: 'projectB',
	domain: 'pri'
]).execute()

