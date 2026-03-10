// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IrrigationPipelineOutlinedSvg from '@colelab/icons-svg/es/asn/IrrigationPipelineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IrrigationPipelineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IrrigationPipelineOutlinedSvg }, slots);
  },
});
